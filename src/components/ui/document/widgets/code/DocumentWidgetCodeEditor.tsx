import React, { FC, useState } from 'react';
import Editor from '@monaco-editor/react';
import { css } from '@emotion/core';

interface ILanguage {
  name: string;
  title: string;
}

const LANGUAGES: Record<string, ILanguage> = {
  abap: { name: 'abap', title: 'ABAP' },
  aes: { name: 'aes', title: 'AES' },
  apex: { name: 'apex', title: 'Apex' },
  azcli: { name: 'azcli', title: 'Azure CLI' },
  bat: { name: 'bat', title: 'Batch' },
  c: { name: 'c', title: 'C' },
  clojure: { name: 'clojure', title: 'Clojure' },
  coffeescript: { name: 'coffeescript', title: 'CoffeeScript' },
  cpp: { name: 'cpp', title: 'C++' },
  csharp: { name: 'csharp', title: 'C#' },
  csp: { name: 'csp', title: 'CSP' },
  css: { name: 'css', title: 'CSS' },
  dockerfile: { name: 'dockerfile', title: 'Dockerfile' },
  fsharp: { name: 'fsharp', title: 'F#' },
  go: { name: 'go', title: 'Go' },
  graphql: { name: 'graphql', title: 'GraphQL' },
  handlebars: { name: 'handlebars', title: 'Handlebars' },
  html: { name: 'html', title: 'HTML' },
  ini: { name: 'ini', title: 'INI' },
  java: { name: 'java', title: 'Java' },
  javascript: { name: 'javascript', title: 'JavaScript' },
  json: { name: 'json', title: 'JSON' },
  kotlin: { name: 'kotlin', title: 'Kotlin' },
  less: { name: 'less', title: 'LESS' },
  lua: { name: 'lua', title: 'Lua' },
  markdown: { name: 'markdown', title: 'Markdown' },
  mips: { name: 'mips', title: 'MIPS' },
  msdax: { name: 'msdax', title: 'Microsoft Dynamics Ax' },
  mysql: { name: 'mysql', title: 'MySQL' },
  'objective-c': { name: 'objective-c', title: 'Objective-C' },
  pascal: { name: 'pascal', title: 'Pascal' },
  pascaligo: { name: 'pascaligo', title: 'LIGO' },
  perl: { name: 'perl', title: 'Perl' },
  pgsql: { name: 'pgsql', title: 'pgSQL' },
  php: { name: 'php', title: 'PHP' },
  plaintext: { name: 'plaintext', title: 'Plain text' },
  postiats: { name: 'postiats', title: 'ats2-postiats' },
  powerquery: { name: 'powerquery', title: 'Power Query' },
  powershell: { name: 'powershell', title: 'PowerShell' },
  pug: { name: 'pug', title: 'Pug' },
  python: { name: 'python', title: 'Python' },
  r: { name: 'r', title: 'R' },
  razor: { name: 'razor', title: 'Razor' },
  redis: { name: 'redis', title: 'Redis' },
  redshift: { name: 'redshift', title: 'Redhift' },
  ruby: { name: 'ruby', title: 'Ruby' },
  rust: { name: 'rust', title: 'Rust' },
  sb: { name: 'sb', title: 'SB' },
  scheme: { name: 'scheme', title: 'Scheme' },
  scss: { name: 'scss', title: 'SCSS' },
  shell: { name: 'shell', title: 'Shell script' },
  sol: { name: 'sol', title: 'SOL' },
  sql: { name: 'sql', title: 'SQL' },
  st: { name: 'st', title: 'Structured text' },
  swift: { name: 'swift', title: 'Swift' },
  tcl: { name: 'tcl', title: 'Tcl' },
  twig: { name: 'twig', title: 'Twig' },
  typescript: { name: 'typescript', title: 'TypeScript' },
  vb: { name: 'vb', title: 'Visual Basic' },
  xml: { name: 'xml', title: 'XML' },
  yaml: { name: 'yaml', title: 'YAML' },
};

export const DocumentWidgetCodeEditor: FC = () => {
  const [code, setCode] = useState('');

  return (
    <div css={styles.root}>
      <Editor height='500px' language={LANGUAGES['typescript'].name} value={code} />
    </div>
  );
};

const styles = {
  root: css``,
};
