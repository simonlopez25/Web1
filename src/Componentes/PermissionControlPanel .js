import React, { useState } from 'react';

export const PermissionControlPanel = () => {
  const [permissions, setPermissions] = useState({
    create: false,
    update: false,
    delete: false
  });

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions({ ...permissions, [name]: checked });
  }

  return (
    <div>
      <h2>Panel de control de permisos</h2>
      <div>
        <label>
          <input type="checkbox" name="create" checked={permissions.create} onChange={handlePermissionChange} />
          Crear
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="update" checked={permissions.update} onChange={handlePermissionChange} />
          Actualizar
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="delete" checked={permissions.delete} onChange={handlePermissionChange} />
          Eliminar
        </label>
      </div>
    </div>
  );
}

export default PermissionControlPanel;
