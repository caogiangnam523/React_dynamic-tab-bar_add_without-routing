import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTab, deleteAll, navigateTab } from "@src/redux/test";
import { Nav, NavItem, NavLink, Button, TabContent, TabPane, } from 'reactstrap';

import { Company, QuickQuotes, Bids, Inventory, Reports, InboundStock, Settings, ConsigneePortal } from '@components/test'

const Tabbar = () => {
  const tabs = useSelector(
    (state) => state.test.tabs
  )

  const currentTab = useSelector(
    (state) => state.test.currentTab
  )

  const dispatch = useDispatch()

  //close one tab action
  const closeOne = (tab) => {
    dispatch(
      deleteTab(tab)
    )
  };
  //close all tab action
  const closeAll = () => {
    dispatch(
      deleteAll()
    )
  }

  const move = (tab) => {
    dispatch(
      navigateTab(tab)
    )
  }

  return (
    <div>
      <Nav className="auto-w mr-auto ml-auto" tabs>
         {tabs.map((tab, i) => (
          <NavItem key={i}>
            <Button
              color={currentTab === tab ? 'primary' : 'secondary'}
              onClick={() => move(tab)}
              className="rounded-0"
              id={tab === 'home' ? "home" : ""}
            >
              {tab}
              {tab !== 'home' && (
                <span onClick={() => closeOne(tab)} className='ms-1 text-white'>x</span>
              )}
            </Button>
          </NavItem>
        ))}
        <NavItem>
          <Button onClick={() => closeAll()} className="btn-close p-1" close type="button">x</Button>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentTab}>
        <TabPane tabId="companies">
          <Company />
        </TabPane>
        <TabPane tabId="quick-quotes">
          <QuickQuotes />
        </TabPane>
        <TabPane tabId="bids">
          <Bids />
        </TabPane>
        <TabPane tabId="inventory">
          <Inventory />
        </TabPane>
        <TabPane tabId="reports">
          <Reports />
        </TabPane>
        <TabPane tabId="inbound-stock">
          <InboundStock />
        </TabPane>
        <TabPane tabId="settings">
          <Settings />
        </TabPane>
        <TabPane tabId="consignee-portal">
          <ConsigneePortal />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabbar