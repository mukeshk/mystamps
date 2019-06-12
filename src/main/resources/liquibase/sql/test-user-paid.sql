--
-- Auto-generated by Maven, based on values from src/main/resources/test/spring/test-data.properties
--

INSERT INTO users(id, login, role, name, registered_at, activated_at, hash, email) VALUES
	(5, 'paid', 'PAID', 'Paid User', NOW(), NOW(), '$2a$10$8Rxlvw8r7r7a.w5rxOJYY.XbBE71ivvGjlnE6w/G73A58l1I76VRK' /* test */, 'paid-user@example.com');

INSERT INTO collections(user_id, slug, updated_at, updated_by) VALUES
	(
		(SELECT id FROM users WHERE login = 'paid'),
		'paid',
		NOW(),
		(SELECT id FROM users WHERE login = 'paid')
	);
