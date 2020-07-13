'use strict';

export const schemafields=[
    { template: ' <div class="py-3 text-center"><h4>Header Validations</h4></div>' },
    {
      key: 'file_validation',
      type: 'select',
      templateOptions: {
        label: 'File Validation',
        required: true,
        options: [
          { label: 'True', value: 'true' },
          { label: 'False', value: 'false' }
        ]
      }
    },   {
      key: 'file_type',
      type: 'select',
      templateOptions: {
        label: 'File Type',
        required: true,
        options: [
          { label: 'csv', value: 'csv' },
          { label: 'json', value: 'json' },
          { label: 'xml', value: 'xml' },
          { label: 'fixed', value: 'fixed' }
        ]
      }
    },
    {
      key: 'com_header_value',
      type: 'input',
      templateOptions: {
        label: 'Header Value',
        placeholder: 'Enter starting length of header value',
        required: true,
      }
    },
    {
      key: 'row_length',
      type: 'input',
      templateOptions: {
        label: 'Row Length',
        placeholder: 'Enter row length of each line ..250 etc',
        required: true,
      }
    },
    { template: '<hr/>' },
    { template: ' <div class="py-3 text-center"><h4>CDC Queries</h4></div>' },
       {
      key: 'key_fields',
      type: 'textarea',
      templateOptions: {
        label: 'Key Fields',
        placeholder: 'Enter the key fields in comma seperated field values',
        required: true,
      }
    },
    {
      key: 'com_bronze_query',
      type: 'textarea',
      templateOptions: {
        label: 'Bronze layer Query',
        placeholder: 'Enter your query here',
        description: 'Select * from raw_table where x >y',
        required: true,
      }
    },
    {
      key: 'com_silver_query',
      type: 'textarea',
      templateOptions: {
        label: 'Silver layer Query',
        placeholder: 'Enter your query here',
        description: 'Select * from bronze_table where a >b',
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
    },
    //   {
    //   key: 'com_trailer_position',
    //   type: 'textarea',
    //   templateOptions: {
    //     label: 'Trailer Position',
    //     placeholder: 'e.g 10,5',
    //     description: 'Enter the trailer postiion as 10,5 (start pos,Endpos)',
    //     required: false,
    //   }
    // }
  ];   
