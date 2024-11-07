import React from 'react'
import './App.css'
import OrgChart from '@unicef/react-org-chart'
import { BrowserRouter, Route } from 'react-router-dom'
import { tree, tree1, tree2, tree3, tree4, tree6 } from './Tree'
import avatarPersonnel from './assets/avatar-personnel.svg'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tree: tree,
      downloadingChart: false,
      config: {},
      highlightPostNumbers: [1],
    }
  }


   // Convert fetched data into the format for OrgChart
  // convertToTreeFormat(data) {
  //   // Assuming `data` might be a single object but needs to match `tree1` structure
  //   return [{
  //     id: data.id,
  //     person: {
  //       id: data.id,
  //       avatar: data.avatar,
  //       department: data.department || '',
  //       name: data.name,
  //       title: data.title,
  //       totalReports: data.totalReports,
  //     },
  //     hasChild: Boolean(data.hasChild),
  //     hasParent: Boolean(data.hasParent),
  //     children: [] // You can fill this with child data if available
  //   }];
  // }

  // componentDidMount() {
  //   // Fetch the data from the backend for tree6
  //   fetch('http://localhost:8080/people/100')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Fetched data:', data); // Log fetched data
  //       const tree6 = this.convertToTreeFormat(data); // Convert the fetched data
  //       console.log('Converted Tree6:', tree6); // Verify the conversion in the console
  //       this.setState({ tree: tree6 }); // Set the state to use the fetched and converted data
  //     })
  //     .catch(error => console.error('Error fetching Tree6:', error));
  // }






  getChild = id => {
    switch (id) {
      case 100:
        return tree1
      case 36:
        return tree6
      case 56:
        return tree3
      case 25:
        return tree4
      default:
        return console.log('no children')
    }
  }

  getParent = d => {
    if (d.id === 100) {
      return {
        id: 500,
        person: {
          id: 500,
          avatar: avatarPersonnel,
          department: '',
          name: 'Pascal ruth',
          title: 'Member',
          totalReports: 1,
        },
        hasChild: false,
        hasParent: true,
        children: [d],
      }
    } else if (d.id === 500) {
      return {
        id: 1,
        person: {
          id: 1,
          avatar: avatarPersonnel,
          department: '',
          name: 'Bryce joe',
          title: 'Director',
          totalReports: 1,
        },
        hasChild: false,
        hasParent: false,
        children: [d],
      }
    } else {
      return d
    }
  }

  handleDownload = () => {
    this.setState({ downloadingChart: false })
  }

  handleOnChangeConfig = config => {
    this.setState({ config: config })
  }

  handleLoadConfig = () => {
    const { config } = this.state
    return config
  }

  render() {

    console.log('tree2 contents:', tree2)

    console.log('tree6 contents:', tree6)

    const { tree, downloadingChart } = this.state

    //For downloading org chart as image or pdf based on id
    const downloadImageId = 'download-image'
    const downloadPdfId = 'download-pdf'

    return (
      <BrowserRouter basename="/react-org-chart">
        <Route exact path="/">
          <React.Fragment>
            <div className="zoom-buttons">
              <button
                className="btn btn-outline-primary zoom-button"
                id="zoom-in"
              >
                +
              </button>
              <button
                className="btn btn-outline-primary zoom-button"
                id="zoom-out"
              >
                -
              </button>
            </div>
            <div className="download-buttons">
              <button className="btn btn-outline-primary" id="download-image">
                Download as image
              </button>
              <button className="btn btn-outline-primary" id="download-pdf">
                Download as PDF
              </button>
              <a
                className="github-link"
                href="https://github.com/unicef/react-org-chart"
              >
                Github
              </a>
              {downloadingChart && <div>Downloading chart</div>}
            </div>
            <OrgChart
              tree={tree}
              downloadImageId={downloadImageId}
              downloadPdfId={downloadPdfId}
              onConfigChange={config => {
                this.handleOnChangeConfig(config)
              }}
              loadConfig={d => {
                let configuration = this.handleLoadConfig(d)
                if (configuration) {
                  return configuration
                }
              }}
              downlowdedOrgChart={d => {
                this.handleDownload()
              }}
              loadImage={d => {
                return Promise.resolve(avatarPersonnel)
              }}
              loadParent={d => {
                const parentData = this.getParent(d)
                return parentData
              }}
              loadChildren={d => {
                const childrenData = this.getChild(d.id)
                return childrenData
              }}
            />
          </React.Fragment>
        </Route>
      </BrowserRouter>
    )
  }
}
