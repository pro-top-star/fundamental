import { Component } from '@angular/core';

@Component({
    selector: 'app-popover',
    templateUrl: './popover-docs.component.html'
})
export class PopoverDocsComponent {
    
    popoverExampleHtml =`<fd-popover [id]="'id_1'">
    <fd-popover-control>
      <fd-image [size]="'l'" [circle]="true" [photo]="'https://placeimg.com/400/400/nature'"></fd-image>
    </fd-popover-control>
    <fd-popover-body>
      <nav class="fd-menu">
        <ul class="fd-menu__list">
          <li>
            <a href="#" class="fd-menu__item">Option 1</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 2</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 3</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 4</a>
          </li>
        </ul>
      </nav>
    </fd-popover-body>
  </fd-popover>

  <fd-popover [id]="'id_2'">
    <fd-popover-control>
      <fd-icon [glyph]="'menu2'" size="l"></fd-icon>
    </fd-popover-control>
    <fd-popover-body>
      <nav class="fd-menu">
        <ul class="fd-menu__list">
          <li>
            <a href="#" class="fd-menu__item">Option 1</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 2</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 3</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 4</a>
          </li>
        </ul>
      </nav>
    </fd-popover-body>
  </fd-popover>

  <fd-popover [id]="'id_3'">
    <fd-popover-control>
      <span fd-identifier [size]="'l'" [glyph]="'money-bills'" [colorAccent]='3'></span>
    </fd-popover-control>
    <fd-popover-body>
      <nav class="fd-menu">
        <ul class="fd-menu__list">
          <li>
            <a href="#" class="fd-menu__item">Option 1</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 2</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 3</a>
          </li>
          <li>
            <a href="#" class="fd-menu__item">Option 4</a>
          </li>
        </ul>
      </nav>
    </fd-popover-body>
  </fd-popover>`;

    constructor() {} 
}
