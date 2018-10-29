import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StatementsPOC';
  
  private rowData;
  private columnDefs;
  private rowGroupPanelShow;
  private gridApi;
  private gridColumnApi;
  private suppressMenuColumnPanel;

  private autoGroupColumnDef;

  constructor() {
    this.columnDefs = [
      {headerName: 'Year', field: 'year', enableRowGroup: true, checkboxSelection: false, minWidth: 120, maxWidth: 200, sort: "desc",
      cellClass: "cell-wrap-text",
      autoHeight: true, menuTabs: ["filterMenuTab"]},
      {headerName: 'Month', field: 'month', enableRowGroup: true, checkboxSelection: false, minWidth: 120, maxWidth: 200,
      cellClass: "cell-wrap-text",
      autoHeight: true, menuTabs: ["filterMenuTab"]},
      {headerName: 'Fund Family', field: 'fund', enableRowGroup: true, minWidth: 300,
      cellClass: "cell-wrap-text",
      autoHeight: true, menuTabs: ["filterMenuTab"]},
      {headerName: 'Account', field: 'account', enableRowGroup: true, minWidth: 300,
      cellClass: "cell-wrap-text",
      autoHeight: true, menuTabs: ["filterMenuTab"]},
      {headerName: 'Statement', field: 'statement', suppressSorting:true, suppressMenu:true, minWidth: 140, maxWidth: 200,
      cellClass: "cell-wrap-text",
      autoHeight: true}
    ];
    this.rowData = [
      { year: '2018', month: 'January', fund: 'FundFam-123456-1 butter butter butter butter butter butter butter butter butter butter butter butter butter butter butter butter', account: 'acnt123456-35000', statement: 'View'  },
      { year: '2001', month: 'January',  fund: 'FundFam-123456-2', account: 'acnt123456-35000', statement: 'View'  },
      { year: '1999', month: 'February',  fund: 'FundFam-123456-3', account: 'acnt123456-35000', statement: 'View'  },
      { year: '2015', month: 'March',  fund: 'FundFam-123456-4', account: 'acnt123456-35000', statement: 'View'  }
    ];
    this.rowGroupPanelShow = "always";
    this.suppressMenuColumnPanel = true;
    this.autoGroupColumnDef = {
      headerName: " Group ",
      minWidth:150,
      menuTabs: ["filterMenuTab"],
      cellRendererParams: {
        suppressCount: true,
        checkbox: false
      },
      filterValueGetter: function(params) {
        return params.data ? [params.data.year, params.data.month, params.data.fund, params.data.account] : null;
      }
    };
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

