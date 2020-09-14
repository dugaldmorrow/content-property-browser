import React, { PureComponent } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';

/* global AP */

export default class App extends PureComponent {

  state = {
    loading: false,
    start: 0,
    limit: 100,
    rowsPerPage: 5
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    if (AP) {
      AP.context.getContext(context => {
        console.log('context:', context);
        const contentId = context.confluence.content.id;
        AP.request({
          url: `/rest/api/content/${contentId}/property?start=${this.state.start}&limit=${this.state.limit}`,
          error: (error) => {
            this.setState({
              error: error,
              loading: false
            });
          },
          success: (responseJson) => {
            try {
              this.setState({
                loading: false
              });
              const contentPropertyData = JSON.parse(responseJson);
              this.setState({
                contentPropertyData: contentPropertyData
              });
            } catch (error) {
              this.setState({
                error: error
              });
            }
          }
        });
      });
    }
  };

  isPrimitive = (value) => {
    const type = typeof value;
    return (type === 'string' || type === 'number' || type === 'boolean');
  };

  renderValue = (value) => {
    if (this.isPrimitive()) {
      return <span>{value.toString()}</span>;
    } else {
      return <pre>{JSON.stringify(value, null, 2)}</pre>;
    }
  };

  renderTable = () => {
    const head = {
      cells: [{
        key: "key",
        content: "Key",
        width: 2
      }, {
        key: "value",
          content: "Value",
          width: 6
      }, {
        key: "version",
          content: "Version",
          width: 1
      }]
    };
    const rows = [];
    this.state.contentPropertyData.results.forEach(result => {
      rows.push({
        cells: [{
          key: "key",
          content: result.key
        }, {
          key: "value",
            content: this.renderValue(result.value)
        }, {
          key: "version",
            content: result.version.number
        }]
      });
    });
    
    return (
      <DynamicTable
        caption="Content properties"
        head={head}
        rows={rows}
        rowsPerPage={this.state.rowsPerPage}
        defaultPage={1}
        loadingSpinnerSize="large"
        isLoading={this.state.loading}
        isFixedSize
        defaultSortKey="key"
        defaultSortOrder="ASC"
        onSort={() => console.log('onSort')}
        onSetPage={() => console.log('onSetPage')}
      />
    );
  }

  renderState = () => {
    return (<pre>{JSON.stringify(this.state, null, 2)}</pre>);
  }

  render() {
    return (
      <div>
        {this.state.contentPropertyData ? this.renderTable() : this.renderState()}
      </div>
    );
  }

}