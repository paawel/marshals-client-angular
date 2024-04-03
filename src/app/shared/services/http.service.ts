import {inject, Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MarshalModel} from "../../models/marshal.model";
import {APP_CONFIG, IAppConfig} from "../../app.module";
import {HttpClient} from "@angular/common/http";
import {BattleModel} from "../../models/battle.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http: HttpClient = inject(HttpClient);

  constructor(@Inject(APP_CONFIG) private config: IAppConfig) {
  }

  getData(): Observable<Array<MarshalModel>> {
    return this.http.get<Array<MarshalModel>>(this.config.api_url + '/marshals');
  }

  createNewMarshal(data: MarshalModel): Observable<MarshalModel> {
    return this.http.post<MarshalModel>(this.config.api_url + '/marshals', data);
  }

  getAllBattles(): Observable<Array<BattleModel>> {
    return this.http.get<Array<BattleModel>>(this.config.api_url + '/battles');
  }
}
