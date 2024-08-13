import { Component } from '@angular/core';
import { BehaviorSubject, concat, delay, finalize, map, Observable, of, scan } from 'rxjs';

interface SaveRequest {
    saveId: number;
    generatedId: number;
}

interface SavingProgress {
    saveInProgress: boolean;
    all: number;
    done: number;
    doneInPercentage: number;
}

interface SaveScanState {
    done: number;
    lastSaveId: number | null;
    lastGeneratedId: number | null;
}

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent {
    public savingStatus$: BehaviorSubject<SavingProgress> = new BehaviorSubject<SavingProgress>({
        saveInProgress: false,
        all: 0,
        done: 0,
        doneInPercentage: 0,
    });

    constructor() {}

    public startSave(): void {
        // Az saveId-k alapján lehet majd megállapítani, hogy melyik folyamat készült el, ezért már a streamek létrehozásakor meg kell adni.
        const requests$: Observable<SaveRequest>[] = [
            of(Math.floor(Math.random() * 1000)).pipe(
                delay(1000),
                map((x) => ({ saveId: 1, generatedId: x }))
            ),
            of(Math.floor(Math.random() * 1000)).pipe(
                delay(1000),
                map((x) => ({ saveId: 2, generatedId: x }))
            ),
            of(Math.floor(Math.random() * 1000)).pipe(
                delay(1000),
                map((x) => ({ saveId: 3, generatedId: x }))
            ),
        ];

        this.savingStatus$.next({ all: requests$.length, done: 0, saveInProgress: true, doneInPercentage: 0 });

        concat(...requests$)
            .pipe(
                scan(
                    (acc: SaveScanState, value: SaveRequest) => {
                        // Az egyes streamek elkészültekor frissítsd a progressbart
                        console.log(`A ${value.saveId} stream elkészült, a generált ID: ${value.generatedId}`);
                        return {
                            done: acc.done + 1,
                            lastSaveId: value.saveId,
                            lastGeneratedId: value.generatedId,
                        };
                    },
                    { done: 0, lastSaveId: null, lastGeneratedId: null }
                ),
                finalize(() => {
                    this.saveCompleted();
                })
            )
            .subscribe((progress) => {
                this.stepCompleted(progress);
            });
    }

    private stepCompleted(state: SaveScanState): void {
        this.savingStatus$.next({
            ...this.savingStatus$.value,
            done: state.done,
            doneInPercentage: Math.floor((state.done / this.savingStatus$.value.all) * 100),
        });
    }

    private saveCompleted(): void {
        this.savingStatus$.next({ ...this.savingStatus$.value, saveInProgress: false, doneInPercentage: 100 });
        console.log(`A teljes folyamat lezárva`);
    }
}
