import React from "react";
import './header.scss';
import Nav from './nav';


export default function Header() {
  const links = [
    { displayName: 'Home', url: '/' },
    { displayName: 'History', url: '/history' },
  ];
  return (
    <div className="headerDiv">
      <h1 className="title">RESTy</h1>
      <Nav links={links} className="top-navbar" />
    </div>
  );
}