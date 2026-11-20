import { IgrColumn, IgrGrid } from 'igniteui-react-grids';
import { IgrCombo } from 'igniteui-react';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import { useGetEmployees } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const { northwindEmployees } = useGetEmployees();
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  const gridLoadingGridTemplate = () => {
    return (
      <>
      </>
    )
  }

  const gridEmptyGridTemplate = () => {
    return (
      <>
      </>
    )
  }

  const gridDetailTemplate = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <div className={classes("column-layout group")}>
          <IgrGrid data={northwindEmployees} primaryKey="employeeID" isLoading={false} loadingGridTemplate={gridLoadingGridTemplate} emptyGridTemplate={gridEmptyGridTemplate} detailTemplate={gridDetailTemplate} allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="managerID" dataType="number" header="managerID" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
          </IgrGrid>
          <IgrCombo outlined={true} data={financialBoxOfficeRevenue} label="Label/Placeholder" displayKey="Franchise" singleSelect={true} className={classes("single-select-combo")}></IgrCombo>
        </div>
      </div>
    </>
  );
}
