describe('Comparadores comunes', () => {
    const user = {
        name: "oscar",
        lastname: "barajas"
    }
    const user2 = {
        name: "oscar",
        lastname: "barajas"
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });
});