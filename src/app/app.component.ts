import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Statements';
  
  private rowData;
  private columnDefs;
  private rowGroupPanelShow;
  private gridApi;
  private gridColumnApi;

  constructor() {
    this.columnDefs = [
      {headerName: 'Date', field: 'date', checkboxSelection: false, suppressMenu:true, minWidth: 150, maxWidth: 200, sort: "asc",
      cellClass: "cell-wrap-text",
      autoHeight: true},
      {headerName: 'Fund Family', field: 'fund', enableRowGroup: true, minWidth: 300,
      cellClass: "cell-wrap-text",
      autoHeight: true},
      {headerName: 'Account', field: 'account', enableRowGroup: true, minWidth: 300,
      cellClass: "cell-wrap-text",
      autoHeight: true},
      {headerName: 'Statement', field: 'statement', suppressSorting:true, suppressMenu:true, minWidth: 150, maxWidth: 200,
      cellClass: "cell-wrap-text",
      autoHeight: true}
    ];
    this.rowData = [
      { date: '09/09/2018', fund: 'FundFam-123456-1 butter butter butter butter butter butter butter butter butter butter butter butter butter butter butter butter', account: 'acnt123456-35000', statement: 'View'  },
      { date: '09/08/2001', fund: 'FundFam-123456-2', account: 'acnt123456-35000', statement: 'View'  },
      { date: '09/07/1999', fund: 'FundFam-123456-3', account: 'acnt123456-35000', statement: 'View'  },
      { date: '09/06/2015', fund: 'FundFam-123456-4', account: 'acnt123456-35000', statement: 'View'  }
    ];
    this.rowGroupPanelShow = "always";
  }

  gridresize(event) {
    event.api.sizeColumnsToFit();
  };

  onColumnResized(event) {
    if (event.finished) {
      this.gridApi.resetRowHeights();
    }
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;

    setTimeout(function() {
      event.api.resetRowHeights();
    }, 500);
  }

}

