import unittest

from py.image_manager.common.exceptions import (
    ConflictError,
    DatabaseError,
    MeldError,
    NotFoundError,
    ValidationError,
)


class TestMeldErrorHierarchy(unittest.TestCase):
    def test_meld_error_default_status_code(self) -> None:
        self.assertEqual(MeldError.status_code, 500)

    def test_not_found_error_status_code(self) -> None:
        self.assertEqual(NotFoundError.status_code, 404)

    def test_validation_error_status_code(self) -> None:
        self.assertEqual(ValidationError.status_code, 400)

    def test_conflict_error_status_code(self) -> None:
        self.assertEqual(ConflictError.status_code, 409)

    def test_database_error_status_code(self) -> None:
        self.assertEqual(DatabaseError.status_code, 500)

    def test_status_code_kwarg_override(self) -> None:
        err = MeldError("custom", status_code=418)
        self.assertEqual(err.status_code, 418)

    def test_status_code_kwarg_override_subclass(self) -> None:
        err = NotFoundError("not found", status_code=410)
        self.assertEqual(err.status_code, 410)

    def test_all_subclasses_are_meld_error(self) -> None:
        for cls in (NotFoundError, ValidationError, ConflictError, DatabaseError):
            with self.subTest(cls=cls):
                instance = cls("msg")
                self.assertIsInstance(instance, MeldError)

    def test_meld_error_is_exception(self) -> None:
        self.assertTrue(issubclass(MeldError, Exception))

    def test_message_preserved(self) -> None:
        err = ValidationError("bad input")
        self.assertEqual(str(err), "bad input")

    def test_instance_status_code_does_not_mutate_class(self) -> None:
        original = NotFoundError.status_code
        err = NotFoundError("test", status_code=410)
        self.assertEqual(err.status_code, 410)
        self.assertEqual(NotFoundError.status_code, original)


if __name__ == "__main__":
    unittest.main()
