export const EmailTemplate = ({
    message,number,name,email
  }) => (
    <div>
        <p>Name:{name}</p>
        <p>Phone:{number}</p>
        <p>{email}</p>
      <h2>{message}</h2>
    </div>
  );
  