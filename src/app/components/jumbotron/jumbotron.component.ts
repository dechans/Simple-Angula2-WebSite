import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html'
})

export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;


    constructor() {
        this.jbtHeading = 'Coucou';
        this.jbtText = 'Petit exemple';
        this.jbtBtnText = 'Lire la suite ...';
        this.jbtBtnUrl = '/about';
    }
}
