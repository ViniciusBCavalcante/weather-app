import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

//anot: O injectable é utilizado para permitir que a classe seja injetada em um componente
//anot: O provideIn 'root' é utilizado para que o serviço seja global. Caso nao queira, pode deixar sem e inserir no modulo do componente na aba de providers
@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private apiKey: string = 'df8d9aa7d99a41da8460f8c7dd370ca8'
    constructor(private _httpClient: HttpClient) {}

    getWeatherData(cityName: string): Observable<any> {
        return this._httpClient.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
            {}
        )
    }
}
