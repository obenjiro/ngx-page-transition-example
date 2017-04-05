import { trigger, transition, animate, style, state } from '@angular/animations';

export default {
  /**
   * Page transition animation
   */
  pageTrasition: trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateY(-20%)'
      }),
      animate('0.8s ease-in')
    ]),
    transition('* => void', [
      animate('0.9s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ])
};
