import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PROJECTS } from '../constants';
import { PROJECT_EVIDENCE, TECHNICAL_STUDIES } from '../projectEvidence';
import EvidenceCaseStudy from '../components/EvidenceCaseStudy';
import TechnicalStudies from '../components/TechnicalStudies';
import CaseStatusNotice from '../components/CaseStatusNotice';

test('evidence-based product cards render benefits, limits and an accessible dialog', () => {
  for (const [id, evidence] of Object.entries(PROJECT_EVIDENCE)) {
    expect(PROJECTS.some(project => project.id === id)).toBe(true);
    const html = renderToStaticMarkup(React.createElement(EvidenceCaseStudy, { projectId: id, onClose() {} }));
    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-modal="true"');
    expect(html).toContain(evidence.headline);
    expect(html).toContain(evidence.limits);
    for (const benefit of evidence.benefits) expect(html).toContain(benefit.title);
    expect(html).not.toMatch(/github\.com|blob\/|apiKey|7776eea|cdad695/);
  }
});

test('unverified projects are not promoted as code reviewed', () => {
  expect(PROJECT_EVIDENCE.autoparts).toBeUndefined();
  const autoParts = PROJECTS.find(project => project.id === 'autoparts')!;
  expect(autoParts.description).toContain('Código-fonte ainda não disponível');
  expect(PROJECTS.map(project => project.description).join(' ')).not.toMatch(/400 mil|600 telas|lucro real|custo exato/i);
  const html = renderToStaticMarkup(React.createElement(CaseStatusNotice, { name: 'AutoPartsGuide' }));
  expect(html).toContain('código-fonte não estava disponível');
});

test('six technical studies are separated from products without invented empty repository case', () => {
  expect(TECHNICAL_STUDIES).toHaveLength(6);
  expect(TECHNICAL_STUDIES.some(study => study.name === 'fabiolucas')).toBe(false);
  const html = renderToStaticMarkup(React.createElement(TechnicalStudies));
  expect(html).toContain('Estudos técnicos e protótipos');
  expect(html).toContain('Trabalho em equipe');
});

test('public contact does not collect visitor data or pretend to submit', async () => {
  const { default: Contact } = await import('../components/Contact');
  const html = renderToStaticMarkup(React.createElement(Contact));
  expect(html).not.toMatch(/<form|<input|<textarea/);
  expect(html).toContain('mailto:fabio@fabiolucas.com');
  expect(html).toContain('tel:+5562998748910');
  expect(html).toContain('Abrir aplicativo de email');
});

test('hosting configuration only exposes dist and requires an explicitly bound target', async () => {
  const fs = await import('node:fs');
  const config = JSON.parse(fs.readFileSync('firebase.json', 'utf8'));
  const projects = JSON.parse(fs.readFileSync('.firebaserc', 'utf8'));
  expect(Object.keys(config)).toEqual(['hosting']);
  expect(config.hosting.public).toBe('dist');
  expect(config.hosting.target).toBe('portfolio-public');
  expect(config.hosting.site).toBeUndefined();
  expect(projects.projects.default).toBe('portifolio-66eb2');
});
