import { AbstractControl } from '@angular/forms';
import { HeroList} from '../mock.hero';

export function forbiddenId(c: AbstractControl) {
  const id = this.HeroList;
  const isNumber = [];
  for (let i = 0; i < id.length; i++) {
    const translate = '' + id[i].id;
    isNumber.push(translate);
  }
  return(isNumber.includes(c.value)) ? {
    invalueidv: true
  } : null;
}
