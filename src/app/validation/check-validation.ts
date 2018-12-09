import { AbstractControl } from '@angular/forms';
import { HeroList} from '../mock.hero';

export function forbiddenId(c: AbstractControl) {
  const id = HeroList;
  const isNumber = [];
  for (let i = 0; i < id.length; i++) {
    const translate = id[i].id;
    isNumber.push(translate.toString());
  }
  return(isNumber.includes(c.value)) ? {
    invalueid: true
  } : null;
}
