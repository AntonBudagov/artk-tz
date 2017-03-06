import {Component}  from '@angular/core';
import { Router }            from '@angular/router';

import {PhotoListComponent} from './photo-list.component';
import {PhotoService} from './photo.service';

@Component({
    selector: 'photo-parent',
    template: `
        <photo-list></photo-list>
    `,
    providers: <any>[PhotoService]
})
export class PhotoComponent {
}