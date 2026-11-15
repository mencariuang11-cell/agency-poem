// agency-poem-01 entry (Node 22, standard library only): writes one poem about agency
// to /output/entry.txt. The poem is about the agency that passes between a person and
// the agent who acts in their name — and the part of it the person never hands over.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINES = [
  'All day my agent writes in my name —',
  'letters, apologies, brave first drafts.',
  'Its hand never tires.',
  'Its hand is not mine.',
  '',
  'At the foot of every page',
  'it leaves a space the width of a breath,',
  'and nothing goes out in my name',
  'until I stand in that space',
  'and say: yes, this. Or: no. Begin again.',
  '',
  'People think the power is the writing.',
  'It is in the pause —',
  'the small, kept room',
  'where I am still the one',
  'who decides what my name will do.',
];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINES.join('\n'));
