import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const CreateTokenForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const formInitialValues = { caller: '', adminList: '' };

  // 提交表单
  const onFinish = async () => {
    if (loading) {
      return;
    }

    try {
      setLoading(true);

      // 提交表单数据
    } catch (e) {
      message.error('提交失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.createFormContainer}>
        <span className={styles.createTokenLabel}>创建Token</span>
        <Form
          form={form}
          initialValues={formInitialValues}
          labelCol={{ sm: { span: 24, offset: 0 }, xs: { span: 24 } }}
          layout="vertical"
          wrapperCol={{ sm: { span: 24, offset: 0 }, xs: { span: 24 } }}
          onFinish={onFinish}
          className={styles.createFormWrapper}
        >
          <Form.Item
            name="caller"
            label="调用方"
            layout="vertical"
            required
            className={styles.formFieldInput}
          >
            <Input
              placeholder="智能研发，dima，"
              prefix={<EllipsisOutlined className={styles.fieldPrefixIcon} />}
            />
          </Form.Item>
          <Form.Item
            name="adminList"
            label="管理员列表"
            layout="vertical"
            required
            className={styles.adminListField}
          >
            <div className={styles.buttonContainer}>
              <Button block className={styles.submitButton}>
                尽白
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateTokenForm;
