// #!/usr/bin/env node
// @flow

import chalk from 'chalk';
import { format } from 'util';

console.log(format('Schoolevents 1.0', {
  title: 'School Events',
  description: 'A repository for your school events.',
}));

console.log(chalk.blue('This is a message in blue color.'));
