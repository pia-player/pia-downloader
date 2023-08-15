import { Button, Card, Form, List } from '@douyinfe/semi-ui';
import { open } from '@tauri-apps/api/shell';
import { useRequest } from 'ahooks';
import { getBackgroundMusics } from './api';

function App() {
  const { data, run: getBGM, loading } = useRequest(getBackgroundMusics);

  return (
    <>
      <List
        dataSource={data}
        loading={loading}
        header={
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <Form
              labelPosition='inset'
              onSubmit={(values) => {
                getBGM(values.id);
              }}
            >
              <Form.InputNumber field='id' label='本号' hideButtons fieldStyle={{ padding: 0 }} />
            </Form>
            {(data?.length ?? 0) > 1 && (
              <Button
                onClick={() => {
                  data?.forEach((item) => {
                    open(item.url);
                  });
                }}
              >
                下载全部
              </Button>
            )}
          </div>
        }
        renderItem={(item) => (
          <List.Item
            main={item.name}
            extra={
              <Button
                onClick={() => {
                  open(item.url);
                }}
              >
                下载
              </Button>
            }
          />
        )}
      />
    </>
  );
}

export default App;
