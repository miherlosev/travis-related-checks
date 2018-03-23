fixture `Fixture`
    .page('https://mail.ru');

test('test', async t => {
    await t.click('body');
});
