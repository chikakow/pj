import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SiteService, AtsI18nService } from 'core-foundation';
import { PlgnJournalService } from '../plgn-journal.service';
import { Subscription } from 'rxjs';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import *as _ from 'lodash';

@Component({
  selector: 'jrn-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  viewJournalData: any;
  isJournalBusy: boolean = false;
  isJournalError: boolean = false;
  modalTitle: string;
  companyName: string;
  site: any;
  siteJson: any;
  @Input() model: any;
  @Output() valueChange = new EventEmitter();
  showJournalPDF: boolean = false;
  pageSize = 10;
  pageSizes;

  private subscription: Subscription;
  constructor(
    private siteService: SiteService,
    private plgnJournalService: PlgnJournalService,
    private atsI18nService: AtsI18nService) { }


  ngOnInit() {

    this.siteJson = this.siteService.getSiteJson().constants;
    this.site = this.siteJson.i18n.site;
    this.subscription = this.plgnJournalService.getcompany().subscribe((data: any) => {
      this.companyName = data.text;
    });

    //this.model = this.model[0];
    this.model.parameters ?
      this.getJournalWithParameters(this.model.token, this.model.parameters) :
      this.getJournal(this.model.token, this.model.controlNo);


    let i18nValues: any = {
      "companyName": this.companyName,
      "site": this.site,
      "modalTitle": this.modalTitle
    }
    this.atsI18nService.initI18nJson(i18nValues);
  }

  getJournalWithParameters(token, parameters) {
    this.modalTitle = this.model.modalTitle;
    this.isJournalBusy = true;
    this.subscription = this.plgnJournalService.getJournalWithParameters(parameters, token)
      .subscribe((data: any) => {
        this.dataBinding(data);
      }, error => {
        this.isJournalBusy = false;
        this.isJournalError = true;
      });
  }

  getJournal(token, controlNo) {
    if (controlNo === undefined) { controlNo = '' }
    this.isJournalBusy = true;
    this.modalTitle = this.model.modalTitle;
    this.subscription = this.plgnJournalService.getJournal(token, controlNo)
      .subscribe((data: any) => {
        this.dataBinding(data);
      }, error => {
        this.isJournalBusy = true;
        this.isJournalError = false;
      });
  }

  dataBinding(data) {
    this.isJournalBusy = false;
    this.isJournalError = false;
    this.viewJournalData = data;
    this.pageSizes = [
      { text: 'All', value: this.viewJournalData.length },
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '20', value: 20 },

    ];
  }

  public toggleJournalPDF(showJournalPDF?: boolean): void {
    this.showJournalPDF = showJournalPDF !== undefined ? showJournalPDF : !this.showJournalPDF;
  }

  public rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven
    }
  }

  close() {
    this.valueChange.emit(false);
  }


  ngOnDestroy() {
    if (this.subscription != null)
      this.subscription.unsubscribe();
  }


}
