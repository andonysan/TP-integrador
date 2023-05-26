import {resetBtn, submitBtn} from './data/index.js';
import {reset, resumen} from './resumen/funcionResumen.js';

resetBtn.addEventListener('click', reset);
submitBtn.addEventListener('click', resumen);

