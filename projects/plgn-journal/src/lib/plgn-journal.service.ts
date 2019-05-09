import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlgnJournalService {

  constructor(private http: HttpClient) { }
  getcompany() {
    return this.http.get("../../api/layouts/site/companies/getcompany");
  }
  getJournalWithParameters(paramsData: any, journal: string) {
    const headers = new HttpHeaders()
      .append("model", JSON.stringify(paramsData));
    return this.http.get('../../api/plugins/journal/journal/getjournalwithparameters/' + journal + '/', { headers });
  }
  getJournal(journal: string, controlNo: string) {
    return this.http.get('../../api/plugins/journal/journal/getjournal/' + journal + '/' + controlNo);

  }

}
