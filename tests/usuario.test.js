const usuario = require('../src/usuario');

test('O objeto usuario deve ter nome, idade e email', () => {
    expect(usuario).toHaveProperty('nome');
    expect(usuario).toHaveProperty('idade');
    expect(usuario).toHaveProperty('email');
});

test('Os valores do objeto usuario devem ser corretos', () => {
    expect(usuario.nome).toBe("Francisco venicio");
    expect(usuario.idade).toBe(17);
    expect(usuario.email).toBe("gmotoplay23@gmail.com");
});
