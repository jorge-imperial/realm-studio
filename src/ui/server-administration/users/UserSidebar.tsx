import * as classnames from "classnames";
import * as React from "react";
import {
  Button,
  ButtonDropdown,
  Card,
  CardBlock,
  CardSubtitle,
  CardText,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from "reactstrap";

import { IAuthUser, IAuthUserMetadata } from "../../../services/ros";

import { IUserSidebarContainerProps } from "./UserSidebarContainer";

import "./UserSidebar.scss";

export enum UserRole {
  Administrator = "administrator",
  Regular = "regular",
}

export interface IUserSidebarProps extends IUserSidebarContainerProps {
  roleDropdownOpen: boolean;
  onDeleted: () => void;
  onRoleChanged: (role: UserRole) => void;
  toggleRoleDropdown: () => void;
}

export const UserSidebar = ({
  className,
  user,
  metadatas,
  onDeleted,
  onRoleChanged,
  roleDropdownOpen,
  toggleRoleDropdown,
}: IUserSidebarProps) => {
  return (
    <div className={classnames(className, "UserSidebar")}>
      {user && (
        <Card className="UserSidebar__card">
          <CardBlock>
            <CardTitle>{user && user.userId}</CardTitle>
            <ButtonDropdown isOpen={roleDropdownOpen} toggle={toggleRoleDropdown}>
              <DropdownToggle caret>
                {user.isAdmin ? "Administrator" : "Regular user"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => onRoleChanged(UserRole.Administrator)}>
                  Administrator
                </DropdownItem>
                <DropdownItem onClick={() => onRoleChanged(UserRole.Regular)}>
                  Regular user
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <CardText>
            </CardText>
            <Table size="sm">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                { metadatas.map((metadata) => {
                  return (
                    <tr key={metadata.key}>
                      <td>{metadata.key}</td>
                      <td>{metadata.value}</td>
                    </tr>
                  );
                }) }
              </tbody>
            </Table>
          </CardBlock>
          <CardBlock className="UserSidebar__controls">
            <Button size="sm" color="danger" onClick={() => onDeleted()}>
              Delete this user
            </Button>
          </CardBlock>
        </Card>
      )}
    </div>
  );
};
