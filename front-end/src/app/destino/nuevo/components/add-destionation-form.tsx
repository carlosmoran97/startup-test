const styles = {
  label: "w-full text-left font-amiko text-xl leading-[35px]",
  labelContainer: "w-full flex flex-col items-center h-[52px] justify-center",
  input: "w-full bg-page-background rounded-[10px] text-xl h-[52px] outline-none px-4"
};

export default function AddDestinationForm() {
  return (
    <div className="bg-card-background rounded-[10px] pt-20 pb-44 mb-40 flex flex-col items-center">
      <h1 className="font-amiko text-5xl mb-24">Agregar destino turistico</h1>
      <div className="max-w-[735px] w-full flex flex-col items-center">
        <div className={styles.labelContainer}>
          <label htmlFor="nombre" className={styles.label}>Nombre</label>
        </div>
        <input id="nombre" className={styles.input} />

        <div className={styles.labelContainer}>
          <label htmlFor="direccion" className={styles.label}>Dirección</label>
        </div>
        <input id="direccion" className={styles.input} />

        <div className={styles.labelContainer}>
          <label htmlFor="descripcion" className={styles.label}>Descripción</label>
        </div>
        <textarea
          id="descripcion"
          className={`${styles.input} !h-[121px] py-4`}
          rows={2}
        />

        <div className={styles.labelContainer}>
          <label htmlFor="url" className={styles.label}>Url imágen</label>
        </div>
        <input id="url" className={styles.input} />

        <button className="font-abeezee bg-primary text-on-primary rounded-[5px] w-full max-w-[598px] h-[50px] shadow-xl cursor-pointer mt-24">
          Agregar destino
        </button>
      </div>
    </div>
  );
}
