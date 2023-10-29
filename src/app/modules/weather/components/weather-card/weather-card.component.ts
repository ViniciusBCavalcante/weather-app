import { WeatherData } from './../../../../models/interface/weather.interface';
import { Component, Input, OnInit } from '@angular/core';
import {
    faTemperatureLow,
    faTemperatureHigh,
    faDroplet,
    faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: [],
})
export class WeatherCardComponent implements OnInit {
    @Input() weatherDataInput!: WeatherData;
    public minTemperatureIcon = faTemperatureLow;
    public maxTemperatureIcon = faTemperatureHigh;
    public humidityIcon = faDroplet;
    public windIcon = faWind;

    ngOnInit(): void {
        console.log(this.weatherDataInput);
    }
}
