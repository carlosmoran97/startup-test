interface IConfirmDeleteModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void
}

export default function ConfirmDeleteModal({ open, onCancel, onConfirm }: IConfirmDeleteModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-xs">
        <h2 className="text-lg font-bold mb-2">¿Eliminar?</h2>
        <p className="mb-4 text-sm">¿Estás seguro que quieres eliminar este elemento?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}