import React from "react";

export default class RecipeSideDishes extends React.Component {
  render() {
    return (
      <div className="table-responsive-sm">
        <h2>Prílohy</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Názov</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Zemiaky</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cestoviny</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Špenát</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Ryža</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Šošovica</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Kuskus</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Polenta</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
