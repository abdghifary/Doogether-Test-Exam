import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navigation.css';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { link } from 'fs';

const StyledButton = styled(Button)`
  color: green;
  && :hover {
    color: blue;
  }
  width: 200px;
`;

const StyledNav = styled.nav`
  background-color: rgba(127, 157, 255, 0.726);
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0px;
`;

const Navigation = () => {
  return (
    <StyledNav className='col-md-2'>
      <StyledUl>
        <li>
          <StyledButton>
            <Link to={'/'}>List All Posts</Link>
          </StyledButton>
        </li>
        <li>
          <Link to={'/create'}>
            <StyledButton>Add New Post</StyledButton>
          </Link>
        </li>
        <li>
          <StyledButton>
            <Link to={'/todo'}>To Do</Link>
          </StyledButton>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
