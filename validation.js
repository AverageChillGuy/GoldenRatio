const validation = new JustValidate("#login");

validation
    .addField("#name", [
        {
            rule: "required"
        },
        {
            rule: 'minLength',
            value: 3,
          },
          {
            rule: 'maxLength',
            value: 10,
          },
    ])
    .addField("#email", [
        {
            rule: "required"
        },
        {
            rule: "email"
        },
          ])

    .addField("#password", [
        {
            rule: 'required',
          },
          {
            rule: 'password',
          },
          ])