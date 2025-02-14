/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { FC } from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BASE_URL_PATH } from '@/router/alias';

const Index: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'nav_menus' });
  return (
    <Row className="pt-4 mb-5">
      <Col xxl={12}>
        <Nav
          className="mb-4 flex-nowrap"
          variant="pills"
          style={{ overflow: 'auto' }}>
          <NavLink to={`${BASE_URL_PATH}/tos`} key="tos" className="nav-link">
            {t('tos')}
          </NavLink>
          <NavLink
            to={`${BASE_URL_PATH}/privacy`}
            key="privacy"
            className="nav-link">
            {t('privacy')}
          </NavLink>
        </Nav>
      </Col>
      <Col xxl={12}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Index;
