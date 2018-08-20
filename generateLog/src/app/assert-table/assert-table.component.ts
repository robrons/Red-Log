import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-assert-table',
  templateUrl: './assert-table.component.html',
  styleUrls: ['./assert-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AssertTableComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['Rule', 'Status'];
  expandedElement: PeriodicElement;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  Rule: string;
  Status: number;
  Comment: string;
  Description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Rule: 'Hydrogen',
    Status: 1.0079,
    Comment: 'H',
    Description: `Hydrogen is a chemical element with Comment H and atomic number 1. With a standard
        atomic Status of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    Rule: 'Helium',
    Status: 4.0026,
    Comment: 'He',
    Description: `Helium is a chemical element with Comment He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    Rule: 'Lithium',
    Status: 6.941,
    Comment: 'Li',
    Description: `Lithium is a chemical element with Comment Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    Rule: 'Beryllium',
    Status: 9.0122,
    Comment: 'Be',
    Description: `Beryllium is a chemical element with Comment Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    Rule: 'Boron',
    Status: 10.811,
    Comment: 'B',
    Description: `Boron is a chemical element with Comment B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    Rule: 'Carbon',
    Status: 12.0107,
    Comment: 'C',
    Description: `Carbon is a chemical element with Comment C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    Rule: 'Nitrogen',
    Status: 14.0067,
    Comment: 'N',
    Description: `Nitrogen is a chemical element with Comment N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    Rule: 'Oxygen',
    Status: 15.9994,
    Comment: 'O',
    Description: `Oxygen is a chemical element with Comment O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    Rule: 'Fluorine',
    Status: 18.9984,
    Comment: 'F',
    Description: `Fluorine is a chemical element with Comment F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    Rule: 'Neon',
    Status: 20.1797,
    Comment: 'Ne',
    Description: `Neon is a chemical element with Comment Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];