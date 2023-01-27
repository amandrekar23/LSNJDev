USE [Events]
GO

INSERT INTO [dbo].[EventType]
           ([Title]
           ,[Description])
     VALUES
           ('Birthdays'
           ,'Birthdays Event')
GO
INSERT INTO [dbo].[EventType]
           ([Title]
           ,[Description])
     VALUES
           ('Graduations'
           ,'Graduation Events')
GO
INSERT INTO [dbo].[EventType]
           ([Title]
           ,[Description])
     VALUES
           ('Weddings'
           ,'Wedding Events')
GO


select * from eventtype
--update EventType set description = 'Birthday Events'