import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treetable',
  templateUrl: './treetable.component.html',
  styleUrls: ['./treetable.component.scss']
})
export class TreetableComponent implements OnInit {
  treeData: any[] = [
    {
      object: "Service Call 462",
      blockType: "Null",
      description: "Service Call 462 is currently blocked",
      lastChanged: "01/02/2020, 1:23 PM",
      level: 0,
      expanded: true,
      children: [
        {
          object: "Activity 718",
          blockType: "Dependent object",
          description: "Dependent object",
          lastChanged: "01/02/2020, 1:23 PM",
          level: 1,
          expanded: false,
          children:[
            {
              object: "Activity 818",
              blockType: "Dependent object",
              description: "Dependent object",
              lastChanged: "01/02/2020, 1:23 PM",
              level: 2,
              expanded: false,
              children:[]
            }
          ]
        }
      ]
    }
  ];

  spaces(num: number) {
    let spaces = '';
     for (let i = 0; i < num; i++) {
      spaces += '\u00A0\u00A0\u00A0\u00A0';
    }
    return spaces;
  }

  clickExpanded(node) {
    node.expanded = true;
  }

  clickCollapsed(node) {
    node.expanded = false;
  }

  ngOnInit(): void {
      return;
  }

}
