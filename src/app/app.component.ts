import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as myGlobals from './app.schemasetup';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent{


  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = myGlobals.schemafields;

  onSubmit() {
    if (this.form.valid) {
      this.dynamicDownloadTxt();
      let jsondata = JSON.stringify(this.model, null, 2);
      console.log("jsondata" + jsondata)
    }
  }

  returnModeldata() {
    return of(this.model);
  }

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  dynamicDownloadTxt() {
    let agg_var = "";
    const searchRegExp = new RegExp('_', 'g'); // Throws SyntaxError
    for (var key in this.model) {
      if (this.model.hasOwnProperty(key)) {
        agg_var = agg_var + key.replace(searchRegExp, ".") + " : " + this.model[key] + "\n"
      }
    }
    this.dyanmicDownloadByHtmlTag({
      fileName: 'framework_processing.yaml',
      text: agg_var
    });
  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);
    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }
}
