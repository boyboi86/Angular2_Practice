import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs/Rx';

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
