import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProgressBar} from './interfaces/progress-bar.interface';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.styl']
})
export class ProgressBarComponent {

    @Input() progress!: IProgressBar;
    @Output() onBackBtnClicked: EventEmitter<void> = new EventEmitter();
    @Output() onHelpBtnClicked: EventEmitter<void> = new EventEmitter();

    get totalProgress(): string {
        const total = this.progress && this.progress.actual * 100 / this.progress.total;
        return total && !isNaN(total) ? `${total}%` : `0%`;
    }

    backBtnClick(): void {
        this.onBackBtnClicked.emit();
    }

    helpBtnClick() {
        if (this.progress.actual == 5) {
            this.onHelpBtnClicked.emit();
        }
    }
}
