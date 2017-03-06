import {Component}  from '@angular/core';
import { Router }            from '@angular/router';

import {PostListComponent} from './post-list.component';
import {PostService} from './post.service';

@Component({
    selector: 'post-parent',
    template: `
        <post-list></post-list>
    `,
    providers: <any>[PostService]
})
export class PostComponent {

}