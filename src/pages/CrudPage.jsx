import { useState } from "react";
import { Button, Stack, Table, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((store) => store.counterReducer);
  const crudState = useSelector((store) => store.crudReducer);

  //modal açık mı?
  const [isOpen, setİsOpen] = useState(false);

  //düzenlenecek eleman state
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setİsOpen(true)}>Yeni Görev ekle</Button>
      </Stack>
      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.isDarkTheme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>

              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setİsOpen(true);
                    }}
                  >
                    Düzenleme
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/*Modal */}
      <FormModal
        isOpen={isOpen}
        handleClose={() => {
          setİsOpen(false);
          setEditItem(null);
        }}
        editItem={editItem}
      />
    </div>
  );
};

export default CrudPage;
