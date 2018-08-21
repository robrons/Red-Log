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
  Status: string;
  Comment: string;
  Description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [{
  "Rule": "10284",
  "Status": "Ferrari",
  "Comment": "primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
  "Description": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non"
}, {
  "Rule": "0829",
  "Status": "Pontiac",
  "Comment": "semper sapien a libero nam dui proin leo odio porttitor id",
  "Description": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero"
}, {
  "Rule": "480",
  "Status": "Mazda",
  "Comment": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
  "Description": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris"
}, {
  "Rule": "71182",
  "Status": "Mazda",
  "Comment": "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
  "Description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in"
}, {
  "Rule": "11586",
  "Status": "Mercedes-Benz",
  "Comment": "pede justo eu massa donec dapibus duis at velit eu est",
  "Description": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed"
}, {
  "Rule": "3741",
  "Status": "Volkswagen",
  "Comment": "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
  "Description": "mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante"
}, {
  "Rule": "2",
  "Status": "BMW",
  "Comment": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
  "Description": "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat"
}, {
  "Rule": "37299",
  "Status": "Cadillac",
  "Comment": "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
  "Description": "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id"
}, {
  "Rule": "65",
  "Status": "Chevrolet",
  "Comment": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
  "Description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"
}, {
  "Rule": "2",
  "Status": "Pontiac",
  "Comment": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
  "Description": "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar"
}, {
  "Rule": "053",
  "Status": "Ford",
  "Comment": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed",
  "Description": "urna ut tellus nulla ut erat id mauris vulputate elementum nullam"
}, {
  "Rule": "820",
  "Status": "GMC",
  "Comment": "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
  "Description": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus"
}, {
  "Rule": "31",
  "Status": "Dodge",
  "Comment": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue",
  "Description": "cursus urna ut tellus nulla ut erat id mauris vulputate elementum"
}, {
  "Rule": "74999",
  "Status": "Chrysler",
  "Comment": "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
  "Description": "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi"
}, {
  "Rule": "51955",
  "Status": "Chevrolet",
  "Comment": "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
  "Description": "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices"
}, {
  "Rule": "04",
  "Status": "GMC",
  "Comment": "consequat lectus in est risus auctor sed tristique in tempus",
  "Description": "hac habitasse platea dictumst maecenas ut massa quis augue luctus"
}, {
  "Rule": "83659",
  "Status": "Toyota",
  "Comment": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
  "Description": "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris"
}, {
  "Rule": "0071",
  "Status": "Lamborghini",
  "Comment": "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris",
  "Description": "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in"
}, {
  "Rule": "1806",
  "Status": "Hummer",
  "Comment": "non mi integer ac neque duis bibendum morbi non quam nec dui",
  "Description": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem"
}, {
  "Rule": "815",
  "Status": "Ford",
  "Comment": "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
  "Description": "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus"
}, {
  "Rule": "43280",
  "Status": "Suzuki",
  "Comment": "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor",
  "Description": "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non"
}, {
  "Rule": "7567",
  "Status": "Honda",
  "Comment": "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis",
  "Description": "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi"
}, {
  "Rule": "5666",
  "Status": "Mitsubishi",
  "Comment": "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
  "Description": "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum"
}, {
  "Rule": "81",
  "Status": "Mercedes-Benz",
  "Comment": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet",
  "Description": "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus"
}, {
  "Rule": "01646",
  "Status": "GMC",
  "Comment": "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
  "Description": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
}, {
  "Rule": "35246",
  "Status": "Toyota",
  "Comment": "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
  "Description": "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices"
}, {
  "Rule": "44540",
  "Status": "Chevrolet",
  "Comment": "in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
  "Description": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus"
}, {
  "Rule": "841",
  "Status": "GMC",
  "Comment": "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  "Description": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis"
}, {
  "Rule": "5751",
  "Status": "Land Rover",
  "Comment": "sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
  "Description": "pede justo eu massa donec dapibus duis at velit eu est congue elementum in"
}, {
  "Rule": "3347",
  "Status": "BMW",
  "Comment": "id consequat in consequat ut nulla sed accumsan felis ut at dolor",
  "Description": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum"
}, {
  "Rule": "009",
  "Status": "Mercury",
  "Comment": "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus",
  "Description": "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla"
}, {
  "Rule": "60",
  "Status": "Nissan",
  "Comment": "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
  "Description": "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum"
}, {
  "Rule": "5721",
  "Status": "Mercedes-Benz",
  "Comment": "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
  "Description": "massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi"
}, {
  "Rule": "8",
  "Status": "Volkswagen",
  "Comment": "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",
  "Description": "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt"
}, {
  "Rule": "9",
  "Status": "Ford",
  "Comment": "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
  "Description": "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse"
}, {
  "Rule": "1",
  "Status": "Jeep",
  "Comment": "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
  "Description": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit"
}, {
  "Rule": "9142",
  "Status": "Volvo",
  "Comment": "convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
  "Description": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat"
}, {
  "Rule": "1",
  "Status": "Bugatti",
  "Comment": "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
  "Description": "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est"
}, {
  "Rule": "7",
  "Status": "Dodge",
  "Comment": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et",
  "Description": "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla"
}, {
  "Rule": "422",
  "Status": "Austin",
  "Comment": "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at",
  "Description": "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis"
}, {
  "Rule": "6605",
  "Status": "Audi",
  "Comment": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",
  "Description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id"
}, {
  "Rule": "9476",
  "Status": "Honda",
  "Comment": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
  "Description": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia"
}, {
  "Rule": "15287",
  "Status": "Ford",
  "Comment": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam",
  "Description": "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis"
}, {
  "Rule": "157",
  "Status": "Suzuki",
  "Comment": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
  "Description": "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue"
}, {
  "Rule": "960",
  "Status": "Chevrolet",
  "Comment": "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
  "Description": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus"
}, {
  "Rule": "56",
  "Status": "Honda",
  "Comment": "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",
  "Description": "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin"
}, {
  "Rule": "5473",
  "Status": "Lincoln",
  "Comment": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
  "Description": "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis"
}, {
  "Rule": "71",
  "Status": "BMW",
  "Comment": "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
  "Description": "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam"
}, {
  "Rule": "885",
  "Status": "Pontiac",
  "Comment": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
  "Description": "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem"
}, {
  "Rule": "8170",
  "Status": "Lexus",
  "Comment": "in faucibus orci luctus et ultrices posuere cubilia curae nulla",
  "Description": "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean"
}, {
  "Rule": "42850",
  "Status": "Ford",
  "Comment": "dapibus duis at velit eu est congue elementum in hac",
  "Description": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus"
}, {
  "Rule": "4548",
  "Status": "Isuzu",
  "Comment": "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
  "Description": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus"
}, {
  "Rule": "8",
  "Status": "Saab",
  "Comment": "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
  "Description": "viverra eget congue eget semper rutrum nulla nunc purus phasellus"
}, {
  "Rule": "7483",
  "Status": "Saturn",
  "Comment": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam",
  "Description": "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum"
}, {
  "Rule": "3377",
  "Status": "Bentley",
  "Comment": "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
  "Description": "eu sapien cursus vestibulum proin eu mi nulla ac enim in"
}, {
  "Rule": "12621",
  "Status": "Subaru",
  "Comment": "sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
  "Description": "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et"
}, {
  "Rule": "0773",
  "Status": "Volvo",
  "Comment": "non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
  "Description": "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget"
}, {
  "Rule": "069",
  "Status": "Land Rover",
  "Comment": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
  "Description": "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi"
}, {
  "Rule": "54",
  "Status": "Smart",
  "Comment": "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
  "Description": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis"
}, {
  "Rule": "8173",
  "Status": "Chevrolet",
  "Comment": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus",
  "Description": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo"
}, {
  "Rule": "1",
  "Status": "Dodge",
  "Comment": "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
  "Description": "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque"
}, {
  "Rule": "1226",
  "Status": "Bentley",
  "Comment": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum",
  "Description": "ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices"
}, {
  "Rule": "5",
  "Status": "Cadillac",
  "Comment": "et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
  "Description": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit"
}, {
  "Rule": "4437",
  "Status": "Toyota",
  "Comment": "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu",
  "Description": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et"
}, {
  "Rule": "0",
  "Status": "Suzuki",
  "Comment": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
  "Description": "vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id"
}, {
  "Rule": "731",
  "Status": "Mercedes-Benz",
  "Comment": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
  "Description": "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy"
}, {
  "Rule": "8453",
  "Status": "Ford",
  "Comment": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
  "Description": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas"
}, {
  "Rule": "39",
  "Status": "Ford",
  "Comment": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt",
  "Description": "ut odio cras mi pede malesuada in imperdiet et commodo vulputate"
}, {
  "Rule": "57026",
  "Status": "Volvo",
  "Comment": "orci luctus et ultrices posuere cubilia curae mauris viverra diam",
  "Description": "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur"
}, {
  "Rule": "5454",
  "Status": "Ford",
  "Comment": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
  "Description": "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque"
}, {
  "Rule": "4",
  "Status": "Toyota",
  "Comment": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  "Description": "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo"
}, {
  "Rule": "3",
  "Status": "Lexus",
  "Comment": "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
  "Description": "sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo"
}, {
  "Rule": "97018",
  "Status": "Audi",
  "Comment": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc",
  "Description": "consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis"
}, {
  "Rule": "75390",
  "Status": "Volvo",
  "Comment": "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
  "Description": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi"
}, {
  "Rule": "30",
  "Status": "Ford",
  "Comment": "cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
  "Description": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris"
}, {
  "Rule": "97820",
  "Status": "Maybach",
  "Comment": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
  "Description": "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit"
}, {
  "Rule": "07",
  "Status": "Mercedes-Benz",
  "Comment": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
  "Description": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer"
}, {
  "Rule": "3",
  "Status": "Acura",
  "Comment": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
  "Description": "amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac"
}, {
  "Rule": "2",
  "Status": "Bentley",
  "Comment": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",
  "Description": "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at"
}, {
  "Rule": "26",
  "Status": "Chrysler",
  "Comment": "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
  "Description": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac"
}, {
  "Rule": "5",
  "Status": "Mazda",
  "Comment": "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
  "Description": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id"
}, {
  "Rule": "421",
  "Status": "Suzuki",
  "Comment": "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
  "Description": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam"
}, {
  "Rule": "37169",
  "Status": "Ford",
  "Comment": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
  "Description": "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna"
}, {
  "Rule": "7",
  "Status": "Infiniti",
  "Comment": "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
  "Description": "lobortis ligula sit amet eleifend pede libero quis orci nullam"
}, {
  "Rule": "0",
  "Status": "Mazda",
  "Comment": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
  "Description": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
}, {
  "Rule": "47",
  "Status": "Dodge",
  "Comment": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
  "Description": "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit"
}, {
  "Rule": "06",
  "Status": "Ford",
  "Comment": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
  "Description": "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum"
}, {
  "Rule": "9419",
  "Status": "GMC",
  "Comment": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
  "Description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum"
}, {
  "Rule": "008",
  "Status": "Chrysler",
  "Comment": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
  "Description": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus"
}, {
  "Rule": "7",
  "Status": "Hyundai",
  "Comment": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
  "Description": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi"
}, {
  "Rule": "661",
  "Status": "Chevrolet",
  "Comment": "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
  "Description": "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis"
}, {
  "Rule": "34",
  "Status": "BMW",
  "Comment": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
  "Description": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis"
}, {
  "Rule": "46648",
  "Status": "Lexus",
  "Comment": "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
  "Description": "aliquet maecenas leo odio condimentum id luctus nec molestie sed justo"
}, {
  "Rule": "44178",
  "Status": "Mazda",
  "Comment": "erat volutpat in congue etiam justo etiam pretium iaculis justo",
  "Description": "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat"
}, {
  "Rule": "55735",
  "Status": "Geo",
  "Comment": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
  "Description": "et tempus semper est quam pharetra magna ac consequat metus"
}, {
  "Rule": "5",
  "Status": "Subaru",
  "Comment": "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
  "Description": "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo"
}, {
  "Rule": "8",
  "Status": "Subaru",
  "Comment": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
  "Description": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula"
}, {
  "Rule": "2",
  "Status": "Hyundai",
  "Comment": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque",
  "Description": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et"
}, {
  "Rule": "8369",
  "Status": "Volkswagen",
  "Comment": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
  "Description": "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue"
}, {
  "Rule": "29686",
  "Status": "Volkswagen",
  "Comment": "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
  "Description": "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien"
}] 