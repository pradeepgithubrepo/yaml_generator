import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    { template: ' <div class="py-3 text-center"><h4>Header Validations</h4></div>' },
    {
      key: 'header_avail',
      type: 'select',
      templateOptions: {
        label: 'Header Presense',
        required: true,
        options: [
          { label: 'True', value: 'true' },
          { label: 'False', value: 'false' }
        ]
      }
    },
    {
      key: 'com_header_value',
      type: 'input',
      templateOptions: {
        label: 'Header Value',
        placeholder: 'Enter 10,20',
        required: true,
      }
    },
    {
      key: 'row_length',
      type: 'input',
      templateOptions: {
        label: 'Row Length',
        placeholder: 'Enter 250 etc',
        required: true,
      }
    },
    { template: '<hr/>' },
    { template: ' <div class="py-3 text-center"><h4>CDC Queries</h4></div>' },
    {
      key: 'com_cdc_query',
      type: 'textarea',
      templateOptions: {
        label: 'CDC Query',
        placeholder: 'Textarea placeholder',
        description: 'Select * from tmp',
        required: true,
      }
    },
    {
      key: 'com_cdcbrz_query',
      type: 'textarea',
      templateOptions: {
        label: 'Bronze Query',
        placeholder: 'Textarea placeholder',
        description: 'Select * from bronze table',
        required: true,
      }
    },
    { template: '<hr/>' },
    { template: ' <div class="py-3 text-center"><h4>Trailer Validations</h4></div>' },
    {
      key: 'com_trailer_validation',
      type: 'select',
      templateOptions: {
        label: 'Trailer Validation',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'True', value: 'true' },
          { label: 'False', value: 'false' }
        ]
      }
    }
  ];

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