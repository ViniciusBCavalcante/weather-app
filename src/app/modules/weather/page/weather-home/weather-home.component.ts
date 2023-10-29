import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interface/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-weather-home',
    templateUrl: './weather-home.component.html',
    styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
    private readonly destroy$: Subject<void> = new Subject();
    public initialCityName = 'Limeira';
    public weatherData!: WeatherData;
    public searchIcon = faMagnifyingGlass;

    constructor(private _weatherService: WeatherService) {}

    ngOnInit(): void {
        this.getWeatherData(this.initialCityName);
    }

    getWeatherData(cityName: string): void {
        this._weatherService
            .getWeatherData(cityName)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (response) => {
                    response && (this.weatherData = response);
                    console.log(this.weatherData);
                },
                error: (error) => console.log(error),
            });
    }

    onSubmit(): void {
        this.getWeatherData(this.initialCityName);
        this.initialCityName = '';
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
